import ImageViewer from '../image/src/image-viewer';

/* istanbul ignore next */
ImageViewer.install = function(Vue) {
  Vue.component(ImageViewer.name, ImageViewer);
};

export default ImageViewer;
