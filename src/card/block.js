/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { RichText } = wp.editor;
const { __ } = wp.i18n;

const CARD = [
  ['bootstrapblocks/icon', { className: 'fas fa-font' }],
  ['core/image', { className: 'card-img-top' }],
  ['core/heading', { className: 'card-title' }],
  ['core/heading', { className: 'card-sub-title text-muted' }],
  ['core/paragraph', { placeholder: 'Write your card text' , className: 'card-text' }],
  ['bootstrapblocks/button', { placeholder: 'Link me' , className: 'btn btn-primary' }],
];

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblockscards/card', {
  title: 'card',
  icon: 'index-card',
  category: 'bootstrapblocks-cards',
  description: __( 'I am a simple card. Add bootstrap classes to the parts to style.', 'card' ),

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'card' + ' ' + className }>
                <InnerBlocks template={CARD} />
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
