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
var VideoArrowDownLeft_exports = {};
__export(VideoArrowDownLeft_exports, {
  default: () => VideoArrowDownLeft_default
});
module.exports = __toCommonJS(VideoArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoArrowDownLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.344 162.344L112 324.688V216C112 211.578 108.422 208 104 208S96 211.578 96 216V344C96 348.422 99.578 352 104 352H232C236.422 352 240 348.422 240 344S236.422 336 232 336H123.312L285.656 173.656C288.781 170.531 288.781 165.469 285.656 162.344S277.469 159.219 274.344 162.344ZM336 64H48C21.492 64 0 85.492 0 112V400C0 426.508 21.492 448 48 448H336C362.508 448 384 426.508 384 400V112C384 85.492 362.508 64 336 64ZM368 400C368 417.645 353.645 432 336 432H48C30.355 432 16 417.645 16 400V112C16 94.355 30.355 80 48 80H336C353.645 80 368 94.355 368 112V400ZM555.656 100.484C542.906 93.75 527.5 94.625 515.688 102.734L419.563 166.547C415.906 169 414.906 173.969 417.344 177.641C419.781 181.344 424.75 182.281 428.438 179.891L524.656 116C531.781 111.141 540.531 110.609 548.219 114.641C555.594 118.531 560 125.734 560 133.922V377.984C560 386.188 555.594 393.406 548.219 397.281C540.594 401.328 531.719 400.781 524.531 395.828L428.406 332.094C424.781 329.687 419.781 330.641 417.344 334.344C414.906 338.031 415.906 342.984 419.594 345.437L515.594 409.094C522.188 413.625 529.844 415.937 537.562 415.937C543.75 415.937 549.969 414.437 555.656 411.437C568.406 404.75 576 392.234 576 377.984V133.922C576 119.688 568.406 107.188 555.656 100.484Z" })
  }
));
VideoArrowDownLeftThin.displayName = "VideoArrowDownLeftThin";
var VideoArrowDownLeft_default = VideoArrowDownLeftThin;
