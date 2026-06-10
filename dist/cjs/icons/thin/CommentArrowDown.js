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
var CommentArrowDown_exports = {};
__export(CommentArrowDown_exports, {
  default: () => CommentArrowDown_default
});
module.exports = __toCommonJS(CommentArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C1.999 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM256 432C220.879 432 186.641 425.816 154.23 413.619L145.723 410.418L138.617 416.084C118.418 432.189 78.477 458.119 25.957 463.143C40.395 444.848 63.375 411.461 72.531 374.555L74.703 365.797L68.332 359.406C34.098 325.066 16 283.775 16 240C16 134.131 123.664 48 256 48S496 134.131 496 240S388.336 432 256 432ZM346.938 232.562C346.062 232.219 345.328 231.906 344.438 231.906C339.314 231.906 328.838 242.271 264 308.404V152C264 147.594 260.422 144 256 144S248 147.594 248 152V308.688L173.656 234.344C170.531 231.219 165.469 231.219 162.344 234.344S159.219 242.531 162.344 245.656L250.344 333.656C251.844 335.156 253.875 336 256 336H256.047C258.172 336 260.219 335.125 261.719 333.594C292.172 302.531 341.891 252.188 348.187 246.812C349.609 245.937 350.781 244.625 351.437 242.937C353.062 238.844 351.047 234.188 346.938 232.562Z" })
  }
));
CommentArrowDownThin.displayName = "CommentArrowDownThin";
var CommentArrowDown_default = CommentArrowDownThin;
