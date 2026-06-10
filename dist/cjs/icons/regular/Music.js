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
var Music_exports = {};
__export(Music_exports, {
  default: () => Music_default
});
module.exports = __toCommonJS(Music_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MusicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 0C476.75 0 473.5 0.5 470.375 1.5L166.375 97.5C153.125 101.75 144 114 144 128V363.125C129 355.75 112.625 352 96 352C43 352 0 387.75 0 432S43 512 96 512C145.375 512 185.5 480.875 190.875 440.875C191.625 438.125 192 435.125 192 432.25V256L464 170.125V299.125C449 291.75 432.625 288 416 288C363 288 320 323.75 320 368S363 448 416 448C465.375 448 505.5 416.75 511 376.875C511.625 374.125 511.875 371.375 512 368.625C512 368.5 512 368.25 512 368V32C512 14.375 497.75 0 480 0ZM96 464C67.75 464 48 447.125 48 432S67.75 400 96 400S144 416.875 144 432S124.25 464 96 464ZM464 368C464 383.125 444.25 400 416 400S368 383.125 368 368S387.75 336 416 336S464 352.875 464 368ZM464 119.75L192 205.625V139.75L464 53.875V119.75Z" })
  }
));
MusicRegular.displayName = "MusicRegular";
var Music_default = MusicRegular;
