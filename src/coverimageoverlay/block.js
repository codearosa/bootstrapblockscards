/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card cover
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { RichText } = wp.editor;
const { __ } = wp.i18n;

const COVERIMAGE = [
  ['core/cover', { className: 'card-img m-0' }],
  ['bootstrapblocks/div', {className: 'card-img-overlay semitransparent bg-primary'}],
    ['bootstrapblocks/div', {className: 'card-img-overlay h-50 m-auto text-center'},[
          ['core/heading', { className: 'card-title' }],
    ]]
];


//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblockscards/coveroverlay', {
  title: 'cover overlay',
  icon: 'index-card',
  category: 'bootstrapblocks-cards',
  description: __( 'I am a simple cover with overlay. Add bootstrap class to style my overlaycolor.', 'coveroverlay' ),

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'mycard' + ' ' + className  }>
              <InnerBlocks template={COVERIMAGE} />
            </div>
        );
    },
    save( { attributes, className } ) {
        return (
            <div className={ 'card' + ' ' + className  }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
