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
var FolderMagnifyingGlass_exports = {};
__export(FolderMagnifyingGlass_exports, {
  default: () => FolderMagnifyingGlass_default
});
module.exports = __toCommonJS(FolderMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMagnifyingGlassLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 96H304L258.746 50.746C246.742 38.742 230.465 32 213.49 32H96C60.654 32 32 60.656 32 96V416C32 451.344 60.654 480 96 480H480C515.346 480 544 451.344 544 416V160C544 124.656 515.346 96 480 96ZM512 416C512 433.645 497.645 448 480 448H96C78.355 448 64 433.645 64 416V96C64 78.355 78.355 64 96 64H213.49C222.039 64 230.074 67.328 236.117 73.375L290.746 128H480C497.645 128 512 142.355 512 160V416ZM350.082 327.457C361.266 311.762 368 292.699 368 272C368 219.062 324.938 176 272 176S176 219.062 176 272S219.062 368 272 368C292.699 368 311.762 361.266 327.457 350.082L388.687 411.312C391.812 414.438 395.906 416 400 416S408.188 414.438 411.312 411.312C417.562 405.062 417.562 394.937 411.312 388.688L350.082 327.457ZM272 336C236.719 336 208 307.281 208 272S236.719 208 272 208S336 236.719 336 272S307.281 336 272 336Z" })
  }
));
FolderMagnifyingGlassLight.displayName = "FolderMagnifyingGlassLight";
var FolderMagnifyingGlass_default = FolderMagnifyingGlassLight;
