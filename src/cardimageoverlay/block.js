/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { RichText } = wp.editor;
const { __ } = wp.i18n;

const CARDIMAGEOVERLAY = [
  ['core/image', { className: 'card-img' }],
  ['bootstrapblocks/div', {className: 'card-img-overlay'},[
    ['core/heading', { className: 'card-title' }],
    ['core/heading', { className: 'card-sub-title text-muted' }],
    ['core/paragraph', { placeholder: 'Write your card text' , className: 'card-text' }],
    ['bootstrapblocks/button', { placeholder: 'Link me' , className: 'btn btn-primary' }],
  ]
]];


//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblockscards/cardoverlay', {
  title: 'cardoverlay',
  icon: 'index-card',
  category: 'bootstrapblocks-cards',
  description: __( 'I am a simple card. Add bootstrap classes to the parts to style.', 'card' ),

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'card bg-dark text-white' + ' ' + className }>
                <InnerBlocks template={CARDIMAGEOVERLAY} />
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
