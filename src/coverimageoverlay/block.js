/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { RichText } = wp.editor;
const { __ } = wp.i18n;

const COVERIMAGEOVERLAY = [
  ['core/cover', { className: 'card-img m-0' }],
  ['bootstrapblocks/div', {className: 'card-img-overlay semitransparent'}],
    ['bootstrapblocks/div', {className: 'card-img-overlay h-50 m-auto text-center'},[
      ['core/heading', { className: 'card-title' }],
      ['core/heading', { className: 'card-sub-title text-muted' }],
      ['core/paragraph', { placeholder: 'Write your card text' , className: 'card-text' }],
      ['core/paragraph', { placeholder: 'Link me' , className: 'btn btn-primary text-white' }],
  ]]
                          ];


//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblockscards/coveroverlay', {
  title: 'cover overlay',
  icon: 'index-card',
  category: 'bootstrapblocks-cards',
  description: __( 'I am a simple cover with overlay. Add bootstrap classes to the parts to style.', 'coveroverlay' ),

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'mycard' + ' ' + className }>
                <InnerBlocks template={COVERIMAGEOVERLAY} />
            </div>
        );
    },
    save( { attributes, className } ) {
        return (
            <div className={ 'card' + ' ' + className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
