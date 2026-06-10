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
var CommentArrowUp_exports = {};
__export(CommentArrowUp_exports, {
  default: () => CommentArrowUp_default
});
module.exports = __toCommonJS(CommentArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C1.999 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM256 432C220.879 432 186.641 425.816 154.23 413.619L145.723 410.418L138.617 416.084C118.418 432.189 78.477 458.119 25.957 463.143C40.395 444.848 63.375 411.461 72.531 374.555L74.703 365.797L68.332 359.406C34.098 325.066 16 283.775 16 240C16 134.131 123.664 48 256 48S496 134.131 496 240S388.336 432 256 432ZM261.656 146.344C260.156 144.844 258.125 144 256 144H255.953C253.828 144 251.781 144.875 250.281 146.406C219.828 177.469 170.109 227.812 163.812 233.188C162.391 234.062 161.219 235.375 160.562 237.062C158.938 241.156 160.953 245.812 165.062 247.438C165.938 247.781 166.672 248.094 167.562 248.094C172.686 248.094 183.162 237.729 248 171.596V328C248 332.406 251.578 336 256 336S264 332.406 264 328V171.312L338.344 245.656C341.469 248.781 346.531 248.781 349.656 245.656S352.781 237.469 349.656 234.344L261.656 146.344Z" })
  }
));
CommentArrowUpThin.displayName = "CommentArrowUpThin";
var CommentArrowUp_default = CommentArrowUpThin;
