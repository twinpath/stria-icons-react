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
var Gopuram_exports = {};
__export(Gopuram_exports, {
  default: () => Gopuram_default
});
module.exports = __toCommonJS(Gopuram_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GopuramThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 432V504C320 508.418 316.418 512 312 512H312C307.582 512 304 508.418 304 504V432C304 423.163 296.837 416 288 416H224C215.163 416 208 423.163 208 432V504C208 508.418 204.418 512 200 512H200C195.582 512 192 508.418 192 504V432C192 414.327 206.327 400 224 400H288C305.673 400 320 414.327 320 432ZM16 504C16 508.418 12.418 512 8 512H8C3.582 512 0 508.418 0 504V384C0 366.328 14.326 352 32 352V256C32 238.328 46.326 224 64 224V144C64 126.328 78.326 112 96 112V8C96 3.594 99.578 0 104 0S112 3.594 112 8V36.906C116.777 34.07 122.043 32 128 32H192V8C192 3.594 195.578 0 200 0S208 3.594 208 8V32H304V8C304 3.594 307.578 0 312 0S320 3.594 320 8V32H384C389.957 32 395.223 34.07 400 36.906V8C400 3.594 403.578 0 408 0S416 3.594 416 8V112C433.674 112 448 126.328 448 144V224C465.674 224 480 238.328 480 256V352C497.674 352 512 366.328 512 384V504C512 508.418 508.418 512 504 512H504C499.582 512 496 508.418 496 504V384C496 375.163 488.837 368 480 368H416V504C416 508.418 412.418 512 408 512H408C403.582 512 400 508.418 400 504V368H112V504C112 508.418 108.418 512 104 512H104C99.582 512 96 508.418 96 504V368H32C23.163 368 16 375.163 16 384V504ZM288 304C288 295.176 280.822 288 272 288H240C231.178 288 224 295.176 224 304V352H288V304ZM384 240H144V352H208V304C208 286.328 222.326 272 240 272H272C289.674 272 304 286.328 304 304V352H384V240ZM288 192V224H336V128H176V224H224V192C224 174.328 238.326 160 256 160S288 174.328 288 192ZM256 176C247.178 176 240 183.176 240 192V224H272V192C272 183.176 264.822 176 256 176ZM400 240V352H464V256C464 247.176 456.822 240 448 240H400ZM352 128V224H432V144C432 135.176 424.822 128 416 128H352ZM112 112H400V64C400 55.176 392.822 48 384 48H128C119.178 48 112 55.176 112 64V112ZM80 224H160V128H96C87.178 128 80 135.176 80 144V224ZM48 352H128V240H64C55.178 240 48 247.176 48 256V352Z" })
  }
));
GopuramThin.displayName = "GopuramThin";
var Gopuram_default = GopuramThin;
