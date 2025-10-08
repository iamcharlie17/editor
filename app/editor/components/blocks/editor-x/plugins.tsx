'use client';

import { ContentEditable } from '@/app/editor/components/editor/editor-ui/content-editable';
import { ImagesPlugin } from '@/app/editor/components/editor/plugins/images-plugin';
import { LayoutPlugin } from '@/app/editor/components/editor/plugins/layout-plugin';
import { BlockFormatDropDown } from '@/app/editor/components/editor/plugins/toolbar/block-format-toolbar-plugin';
import { FormatBulletedList } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-bulleted-list';
import { FormatCheckList } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-check-list';
import { FormatCodeBlock } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-code-block';
import { FormatHeading } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-heading';
import { FormatNumberedList } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-numbered-list';
import { FormatParagraph } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-paragraph';
import { FormatQuote } from '@/app/editor/components/editor/plugins/toolbar/block-format/format-quote';
import { BlockInsertPlugin } from '@/app/editor/components/editor/plugins/toolbar/block-insert-plugin';
import { InsertColumnsLayout } from '@/app/editor/components/editor/plugins/toolbar/block-insert/insert-columns-layout';
import { InsertEmbeds } from '@/app/editor/components/editor/plugins/toolbar/block-insert/insert-embeds';
import { InsertHorizontalRule } from '@/app/editor/components/editor/plugins/toolbar/block-insert/insert-horizontal-rule';
import { InsertImage } from '@/app/editor/components/editor/plugins/toolbar/block-insert/insert-image';
import { InsertTable } from '@/app/editor/components/editor/plugins/toolbar/block-insert/insert-table';
import { ClearFormattingToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/clear-formatting-toolbar-plugin';
import { CodeLanguageToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/code-language-toolbar-plugin';
import { ElementFormatToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/element-format-toolbar-plugin';
import { FontBackgroundToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/font-background-toolbar-plugin';
import { FontColorToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/font-color-toolbar-plugin';
import { FontFamilyToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/font-family-toolbar-plugin';
import { FontFormatToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/font-format-toolbar-plugin';
import { FontSizeToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/font-size-toolbar-plugin';
import { HistoryToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/history-toolbar-plugin';
import { LinkToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/link-toolbar-plugin';
import { SubSuperToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/subsuper-toolbar-plugin';
import { ToolbarPlugin } from '@/app/editor/components/editor/plugins/toolbar/toolbar-plugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin"
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin'
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin"
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin"
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { Separator } from '@radix-ui/react-separator';
import React, { useState } from 'react';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { MentionsPlugin } from '@/app/editor/components/editor/plugins/mentions-plugin';
import { DraggableBlockPlugin } from '@/app/editor/components/editor/plugins/draggable-block-plugin';
import { KeywordsPlugin } from '@/app/editor/components/editor/plugins/keywords-plugin';
import { AutoEmbedPlugin } from '@/app/editor/components/editor/plugins/embeds/auto-embed-plugin';
import { TwitterPlugin } from '@/app/editor/components/editor/plugins/embeds/twitter-plugin';
import { YouTubePlugin } from '@/app/editor/components/editor/plugins/embeds/youtube-plugin';
import { CodeHighlightPlugin } from '@/app/editor/components/editor/plugins/code-highlight-plugin';
import { CodeActionMenuPlugin } from '@/app/editor/components/editor/plugins/code-action-menu-plugin';
import { AutoLinkPlugin } from '@/app/editor/components/editor/plugins/auto-link-plugin';
import { LinkPlugin } from '@/app/editor/components/editor/plugins/link-plugin';
import { ComponentPickerMenuPlugin } from '@/app/editor/components/editor/plugins/component-picker-menu-plugin';
import { ParagraphPickerPlugin } from '@/app/editor/components/editor/plugins/picker/paragraph-picker-plugin';
import { HeadingPickerPlugin } from '@/app/editor/components/editor/plugins/picker/heading-picker-plugin';
import { DynamicTablePickerPlugin, TablePickerPlugin } from '@/app/editor/components/editor/plugins/picker/table-picker-plugin';
import { CheckListPickerPlugin } from '@/app/editor/components/editor/plugins/picker/check-list-picker-plugin';
import { NumberedListPickerPlugin } from '@/app/editor/components/editor/plugins/picker/numbered-list-picker-plugin';
import { BulletedListPickerPlugin } from '@/app/editor/components/editor/plugins/picker/bulleted-list-picker-plugin';
import { QuotePickerPlugin } from '@/app/editor/components/editor/plugins/picker/quote-picker-plugin';
import { CodePickerPlugin } from '@/app/editor/components/editor/plugins/picker/code-picker-plugin';
import { DividerPickerPlugin } from '@/app/editor/components/editor/plugins/picker/divider-picker-plugin';
import { EmbedsPickerPlugin } from '@/app/editor/components/editor/plugins/picker/embeds-picker-plugin';
import { ImagePickerPlugin } from '@/app/editor/components/editor/plugins/picker/image-picker-plugin';
import { ColumnsLayoutPickerPlugin } from '@/app/editor/components/editor/plugins/picker/columns-layout-picker-plugin';
import { AlignmentPickerPlugin } from '@/app/editor/components/editor/plugins/picker/alignment-picker-plugin';
import { ContextMenuPlugin } from '@/app/editor/components/editor/plugins/context-menu-plugin';
import { DragDropPastePlugin } from '@/app/editor/components/editor/plugins/drag-drop-paste-plugin';
import { EmojisPlugin } from '@/app/editor/components/editor/plugins/emojis-plugin';
import { EmojiPickerPlugin } from '@/app/editor/components/editor/plugins/emoji-picker-plugin';
import { FloatingLinkEditorPlugin } from '@/app/editor/components/editor/plugins/floating-link-editor-plugin';
import { FloatingTextFormatToolbarPlugin } from '@/app/editor/components/editor/plugins/floating-text-format-plugin';
import { ListMaxIndentLevelPlugin } from '@/app/editor/components/editor/plugins/list-max-indent-level-plugin';
import { TABLE } from '@/app/editor/components/editor/transformers/markdown-table-transformer';
import { HR } from '@/app/editor/components/editor/transformers/markdown-hr-transformer';
import { IMAGE } from '@/app/editor/components/editor/transformers/markdown-image-transformer';
import { EMOJI } from '@/app/editor/components/editor/transformers/markdown-emoji-transformer';
import { TWEET } from '@/app/editor/components/editor/transformers/markdown-tweet-transformer';
import { CHECK_LIST, ELEMENT_TRANSFORMERS, MULTILINE_ELEMENT_TRANSFORMERS, TEXT_FORMAT_TRANSFORMERS, TEXT_MATCH_TRANSFORMERS } from '@lexical/markdown';
import { ActionsPlugin } from '@/app/editor/components/editor/plugins/actions/actions-plugin';
import { MaxLengthPlugin } from '@/app/editor/components/editor/plugins/actions/max-length-plugin';
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin';
import { CounterCharacterPlugin } from '@/app/editor/components/editor/plugins/actions/counter-character-plugin';
// import { SpeechToTextPlugin } from '@/components/editor/plugins/actions/speech-to-text-plugin';
// import { ShareContentPlugin } from '@/components/editor/plugins/actions/share-content-plugin';
// import { ImportExportPlugin } from '@/components/editor/plugins/actions/import-export-plugin';
// import { MarkdownTogglePlugin } from '@/components/editor/plugins/actions/markdown-toggle-plugin';
import { EditModeTogglePlugin } from '@/app/editor/components/editor/plugins/actions/edit-mode-toggle-plugin';
import { ClearEditorActionPlugin } from '@/app/editor/components/editor/plugins/actions/clear-editor-plugin';
// import { TreeViewPlugin } from '@/components/editor/plugins/actions/tree-view-plugin';

const placeholder = "Press / for commands..."
const maxLength = 50000;

export const Plugins = ({ }) => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }
  return (
    <div className='relative '>

      <div>
        <ToolbarPlugin >
          {
            ({ blockType }) => (
              <div className='vertical-align-middle sticky top-0 z-10 flex items-center gap-2 overflow-auto border-b p-1'>
                <HistoryToolbarPlugin />
                <Separator orientation='vertical' className='!h-7' />
                <BlockFormatDropDown>
                  <FormatParagraph />
                  <FormatHeading levels={["h1", "h2", "h3"]} />
                  <FormatNumberedList />
                  <FormatBulletedList />
                  <FormatCheckList />
                  <FormatCodeBlock />
                  <FormatQuote />
                </BlockFormatDropDown>
                {
                  blockType === 'code' ? <CodeLanguageToolbarPlugin />
                    :
                    <>
                      <FontFamilyToolbarPlugin />
                      <FontSizeToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <FontFormatToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <LinkToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
                      <SubSuperToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <ClearFormattingToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <FontColorToolbarPlugin />
                      <FontBackgroundToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <ElementFormatToolbarPlugin />
                      <Separator orientation="vertical" className="!h-7" />
                      <BlockInsertPlugin>
                        <InsertHorizontalRule />
                        <InsertImage />
                        <InsertTable />
                        <InsertColumnsLayout />
                        <InsertEmbeds />
                      </BlockInsertPlugin>
                    </>
                }
              </div>
            )
          }
        </ToolbarPlugin>
      </div>

      {/* main editor content */}
      <div className="relative border bg-white rounded-md my-2">
        <AutoFocusPlugin />
        <RichTextPlugin contentEditable={
          <div>
            <div ref={onRef}>
              <ContentEditable
                placeholder={placeholder}
                className='ContentEditable__root relative block min-h-[75vh] max-h-[85vh] overflow-auto px-8 py-4 focus:outline-none' />
            </div>
          </div>
        }
          ErrorBoundary={LexicalErrorBoundary} />
      </div>

      <ClickableLinkPlugin />
      <CheckListPlugin />
      <HorizontalRulePlugin />
      <TablePlugin />
      <ListPlugin />
      <TabIndentationPlugin />
      <HashtagPlugin />
      <HistoryPlugin />

      <MentionsPlugin />
      <DraggableBlockPlugin anchorElem={floatingAnchorElem} />

      <KeywordsPlugin />

      <EmojisPlugin />
      <ImagesPlugin />

      <LayoutPlugin />


      <AutoEmbedPlugin />
      <TwitterPlugin />
      <YouTubePlugin />

      <CodeHighlightPlugin />
      <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />

      <AutoLinkPlugin />
      <LinkPlugin />

      <MarkdownShortcutPlugin
        transformers={[
          TABLE,
          HR,
          IMAGE,
          EMOJI,
          TWEET,
          CHECK_LIST,
          ...ELEMENT_TRANSFORMERS,
          ...MULTILINE_ELEMENT_TRANSFORMERS,
          ...TEXT_FORMAT_TRANSFORMERS,
          ...TEXT_MATCH_TRANSFORMERS,
        ]}
      />

      <ComponentPickerMenuPlugin
        baseOptions={[
          ParagraphPickerPlugin(),
          HeadingPickerPlugin({ n: 1 }),
          HeadingPickerPlugin({ n: 2 }),
          HeadingPickerPlugin({ n: 3 }),
          TablePickerPlugin(),
          CheckListPickerPlugin(),
          NumberedListPickerPlugin(),
          BulletedListPickerPlugin(),
          QuotePickerPlugin(),
          CodePickerPlugin(),
          DividerPickerPlugin(),
          EmbedsPickerPlugin({ embed: "tweet" }),
          EmbedsPickerPlugin({ embed: "youtube-video" }),
          ImagePickerPlugin(),
          ColumnsLayoutPickerPlugin(),
          AlignmentPickerPlugin({ alignment: "left" }),
          AlignmentPickerPlugin({ alignment: "center" }),
          AlignmentPickerPlugin({ alignment: "right" }),
          AlignmentPickerPlugin({ alignment: "justify" }),
        ]}
        dynamicOptionsFn={DynamicTablePickerPlugin}
      />

      <ContextMenuPlugin />
      <DragDropPastePlugin />
      <EmojiPickerPlugin />

      <FloatingLinkEditorPlugin
        anchorElem={floatingAnchorElem}
        isLinkEditMode={isLinkEditMode}
        setIsLinkEditMode={setIsLinkEditMode}
      />
      <FloatingTextFormatToolbarPlugin
        anchorElem={floatingAnchorElem}
        setIsLinkEditMode={setIsLinkEditMode}
      />

      <ListMaxIndentLevelPlugin />

      <ActionsPlugin>
        <div className="clear-both flex items-center justify-between gap-2 overflow-auto border-t p-1">
          <div className="flex flex-1 justify-start">
            <MaxLengthPlugin maxLength={maxLength} />
            <CharacterLimitPlugin maxLength={maxLength} charset="UTF-16" />
          </div>
          <div>
            <CounterCharacterPlugin charset="UTF-16" />
          </div>
          <div className="flex flex-1 justify-end">
            {/* <SpeechToTextPlugin /> */}
            {/* <ShareContentPlugin /> */}
            {/* <ImportExportPlugin /> */}
            {/* <MarkdownTogglePlugin
              shouldPreserveNewLinesInMarkdown={true}
              transformers={[
                TABLE,
                HR,
                IMAGE,
                EMOJI,
                TWEET,
                CHECK_LIST,
                ...ELEMENT_TRANSFORMERS,
                ...MULTILINE_ELEMENT_TRANSFORMERS,
                ...TEXT_FORMAT_TRANSFORMERS,
                ...TEXT_MATCH_TRANSFORMERS,
              ]}
            /> */}
            <EditModeTogglePlugin />
            <>
              <ClearEditorActionPlugin />
              <ClearEditorPlugin />
            </>
            {/* <TreeViewPlugin /> */}
          </div>
        </div>
      </ActionsPlugin>

    </div>
  );
};
