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
var AudioDescription_exports = {};
__export(AudioDescription_exports, {
  default: () => AudioDescription_default
});
module.exports = __toCommonJS(AudioDescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM213.469 173.266C205.344 157.016 178.656 157.016 170.531 173.266L98.531 317.266C92.594 329.125 97.406 343.531 109.281 349.469C121.156 355.438 135.562 350.594 141.469 338.734L150.836 320H233.164L242.531 338.734C246.75 347.141 255.219 352 264.031 352C267.625 352 271.281 351.188 274.719 349.469C286.594 343.531 291.406 329.125 285.469 317.266L213.469 173.266ZM170.836 280L192 237.672L213.164 280H170.836ZM384 160H328C314.75 160 304 170.75 304 184V328C304 341.25 314.75 352 328 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 304H352V208H384C410.469 208 432 229.531 432 256S410.469 304 384 304Z" })
  }
));
AudioDescriptionRegular.displayName = "AudioDescriptionRegular";
var AudioDescription_default = AudioDescriptionRegular;
