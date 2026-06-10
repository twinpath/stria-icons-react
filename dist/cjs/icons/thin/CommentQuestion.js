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
var CommentQuestion_exports = {};
__export(CommentQuestion_exports, {
  default: () => CommentQuestion_default
});
module.exports = __toCommonJS(CommentQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentQuestionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M283.654 127.562H223.061C192.686 127.562 167.998 152.25 167.998 182.609C167.998 187.031 171.592 190.609 175.998 190.609S183.998 187.031 183.998 182.609C183.998 161.078 201.529 143.563 223.061 143.563H283.654C308.092 143.563 327.998 163.453 327.998 187.906C327.998 204.797 318.592 220 303.373 227.641L252.311 254.141C249.654 255.516 247.998 258.25 247.998 261.234V288C247.998 292.422 251.592 296 255.998 296S263.998 292.422 263.998 288V266.094L310.654 241.891C331.217 231.578 343.998 210.891 343.998 187.906C343.998 154.625 316.936 127.562 283.654 127.562ZM255.998 328C247.162 328 239.998 335.162 239.998 344C239.998 352.836 247.162 360 255.998 360S271.998 352.836 271.998 344C271.998 335.162 264.834 328 255.998 328ZM256 31.998C114.594 31.998 0 125.092 0 239.998C0 289.592 21.406 334.998 57 370.701C44.5 421.092 2.688 465.998 2.188 466.498C0 468.795 -0.594 472.201 0.688 475.201C2 478.201 4.812 479.998 8 479.998C74.312 479.998 124 448.201 148.594 428.592C181.312 440.904 217.594 447.998 256 447.998C397.406 447.998 512 354.904 512 239.998S397.406 31.998 256 31.998ZM256 431.998C220.879 431.998 186.641 425.814 154.23 413.617L145.723 410.416L138.617 416.082C118.418 432.188 78.477 458.117 25.957 463.141C40.395 444.846 63.375 411.459 72.531 374.553L74.703 365.795L68.332 359.404C34.098 325.064 16 283.773 16 239.998C16 134.129 123.664 47.998 256 47.998S496 134.129 496 239.998S388.336 431.998 256 431.998Z" })
  }
));
CommentQuestionThin.displayName = "CommentQuestionThin";
var CommentQuestion_default = CommentQuestionThin;
