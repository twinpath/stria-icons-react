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
var InboxFull_exports = {};
__export(InboxFull_exports, {
  default: () => InboxFull_default
});
module.exports = __toCommonJS(InboxFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxFullThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.031 304H384C380.969 304 378.188 305.719 376.844 308.438L347.062 368H164.938L135.156 308.438C133.812 305.719 131.031 304 128 304H72.969C68.562 304 64.969 307.594 64.969 312S68.562 320 72.969 320H123.062L152.844 379.562C154.188 382.281 156.969 384 160 384H352C355.031 384 357.812 382.281 359.156 379.562L388.938 320H439.031C443.438 320 447.031 316.406 447.031 312S443.438 304 439.031 304ZM508.285 304.918L447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.248 314.938 0 325.215 0 335.531V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V335.531C512 325.215 510.752 314.938 508.285 304.918ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V335.531C16 326.516 17.094 317.504 19.25 308.746L80.49 60.129C82.277 52.988 88.654 48 96 48H416C423.346 48 429.723 52.988 431.496 60.078L492.75 308.742C494.906 317.504 496 326.516 496 335.531V432ZM112 256H400C404.406 256 408 252.406 408 248S404.406 240 400 240H112C107.594 240 104 243.594 104 248S107.594 256 112 256ZM128 192H384C388.406 192 392 188.406 392 184S388.406 176 384 176H128C123.594 176 120 179.594 120 184S123.594 192 128 192ZM144 128H368C372.406 128 376 124.406 376 120S372.406 112 368 112H144C139.594 112 136 115.594 136 120S139.594 128 144 128Z" })
  }
));
InboxFullThin.displayName = "InboxFullThin";
var InboxFull_default = InboxFullThin;
