var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var HouseTree_exports = {};
__export(HouseTree_exports, {
  default: () => HouseTree_default
});
module.exports = __toCommonJS(HouseTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseTreeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M234.715 255.971H149.393C137.633 255.971 128 265.471 128 277.348V362.609C128 374.486 137.633 383.986 149.393 383.986H234.715C246.475 383.986 256.107 374.361 256.107 362.609V277.348C256.107 265.596 246.6 255.971 234.715 255.971ZM224.08 351.982H160.027V287.975H224.08V351.982ZM215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.17 99.025 168.514 105.078L17.139 242.691C6.223 252.613 0 266.682 0 281.434V448C0 483.346 28.654 512 64 512H319.994C355.34 512 383.992 483.441 383.994 448.098C383.998 394.322 384 320.908 384 281.107C384 266.455 377.818 252.656 366.977 242.801L215.477 105.078ZM351.994 448C351.992 465.6 337.592 480 319.994 480H64C46.326 480 32 465.672 32 448V281.438C32 275.699 34.42 270.227 38.666 266.365L191.996 127.998L345.357 266.395C349.588 270.24 352 275.693 352 281.41L351.994 448ZM628.213 432.586L566.908 361.777C583.906 361.34 598.779 351.641 605.871 336.277C613.059 320.758 610.684 302.984 599.592 289.875L533.1 211.619H540.441C556.471 211.619 570.812 202.576 576.969 188.59C582.75 175.449 580.25 160.586 570.344 149.76L443.891 12.367C428.924 -4.123 399.082 -4.092 384.178 12.273L308.219 94.908C302.25 101.418 302.656 111.555 309.156 117.562C315.686 123.539 325.811 123.133 331.777 116.623L407.801 33.895C410.676 30.734 417.236 30.703 420.299 33.988L546.785 171.412C548.098 172.852 548.348 174.166 547.691 175.668C546.848 177.576 544.535 179.578 540.441 179.578H498.479C492.229 179.578 486.572 183.209 483.947 188.871C481.324 194.535 482.262 201.23 486.291 205.986L575.188 310.619C579.438 315.656 577.781 320.789 576.875 322.791C576.094 324.418 573.031 329.77 565.627 329.77H531.881C525.631 329.77 519.912 333.43 517.32 339.125C514.727 344.85 515.695 351.547 519.787 356.271L604.027 453.582C610.309 460.811 607.434 468.695 606.402 470.947C605.184 473.67 601.404 479.959 592.811 479.959H431.986C423.143 479.959 415.986 487.125 415.986 495.979C415.986 504.834 423.143 512 431.986 512H592.811C611.371 512 627.744 501.361 635.525 484.246C643.492 466.754 640.68 446.98 628.213 432.586Z" })
  }
));
HouseTreeLight.displayName = "HouseTreeLight";
var HouseTree_default = HouseTreeLight;
