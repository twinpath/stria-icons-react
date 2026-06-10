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
var ToiletPaperBlankUnder_exports = {};
__export(ToiletPaperBlankUnder_exports, {
  default: () => ToiletPaperBlankUnder_default
});
module.exports = __toCommonJS(ToiletPaperBlankUnder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankUnderThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 120C377.203 120 360 150.953 360 192S377.203 264 400 264S440 233.047 440 192S422.797 120 400 120ZM400 248C388.672 248 376 224.047 376 192S388.672 136 400 136S424 159.953 424 192S411.328 248 400 248ZM400 0H112C50.25 0 0 86.125 0 192S50.25 384 112 384H400C440.762 384 476.406 346.348 496 290.381V472C496 485.234 485.234 496 472 496H168C154.766 496 144 485.234 144 472V424C144 419.578 140.422 416 136 416S128 419.578 128 424V472C128 494.062 145.938 512 168 512H472C494.062 512 512 494.062 512 472V192C512 86.125 461.75 0 400 0ZM112 368C59.062 368 16 289.047 16 192S59.062 16 112 16H355.375C315.777 45.627 288 113.32 288 192S315.777 338.373 355.375 368H112ZM400 368C347.062 368 304 289.047 304 192S347.062 16 400 16S496 94.953 496 192S452.938 368 400 368Z" })
  }
));
ToiletPaperBlankUnderThin.displayName = "ToiletPaperBlankUnderThin";
var ToiletPaperBlankUnder_default = ToiletPaperBlankUnderThin;
