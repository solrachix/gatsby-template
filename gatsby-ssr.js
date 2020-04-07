/**
 * render server side
 */
export { wrapPageElement } from './gatsby/wrapPageElement';

/**
 * headComponents       : Setar algo no HEAD
 * preBodyComponents    : Setar algo depois de abrir a tag Body
 * setPostBodyComponents: Setar algo antes de fechar a tag Body
 */

// export const onRenderBody = ({
//   setPostBodyComponents,
// }) => {
//   setPostBodyComponents([
//     <script type="text/javascript" src=""/>
//   ])
// }