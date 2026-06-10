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
var SquareSlidersVertical_exports = {};
__export(SquareSlidersVertical_exports, {
  default: () => SquareSlidersVertical_default
});
module.exports = __toCommonJS(SquareSlidersVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersVerticalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 256C131.578 256 128 259.594 128 264V408C128 412.406 131.578 416 136 416S144 412.406 144 408V264C144 259.594 140.422 256 136 256ZM168 160.014H143.994C143.994 160.008 144 160.006 144 160V104C144 99.594 140.422 96 136 96S128 99.594 128 104V160C128 160.006 128.006 160.008 128.006 160.014H104C86.326 160.014 72 174.34 72 192.014S86.326 224.014 104 224.014H168C185.672 224.014 200 209.687 200 192.014S185.672 160.014 168 160.014ZM168 208.014H104C95.178 208.014 88 200.836 88 192.014S95.178 176.014 104 176.014H168C176.822 176.014 184 183.191 184 192.014S176.822 208.014 168 208.014ZM312 352C307.578 352 304 355.594 304 360V408C304 412.406 307.578 416 312 416S320 412.406 320 408V360C320 355.594 316.422 352 312 352ZM344 256H320V104C320 99.594 316.422 96 312 96S304 99.594 304 104V256H280C262.326 256 248 270.326 248 288S262.326 320 280 320H344C361.672 320 376 305.674 376 288S361.672 256 344 256ZM344 304H280C271.178 304 264 296.822 264 288S271.178 272 280 272H344C352.822 272 360 279.178 360 288S352.822 304 344 304ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416Z" })
  }
));
SquareSlidersVerticalThin.displayName = "SquareSlidersVerticalThin";
var SquareSlidersVertical_default = SquareSlidersVerticalThin;
