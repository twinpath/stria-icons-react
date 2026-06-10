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
var Tape_exports = {};
__export(Tape_exports, {
  default: () => Tape_default
});
module.exports = __toCommonJS(Tape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TapeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 464H256C141.312 464 48 370.688 48 256S141.312 48 256 48S464 141.312 464 256C464 310.766 442.906 362.453 404.562 401.547C398.375 407.859 398.5 417.984 404.812 424.172C411.094 430.406 421.25 430.25 427.437 423.953C471.656 378.844 496 319.188 496 256C496 123.656 388.344 16 256 16S16 123.656 16 256S123.656 496 256 496H608C616.844 496 624 488.844 624 480S616.844 464 608 464ZM144 256C144 317.75 194.25 368 256 368S368 317.75 368 256S317.75 144 256 144S144 194.25 144 256ZM336 256C336 300.109 300.125 336 256 336S176 300.109 176 256S211.875 176 256 176S336 211.891 336 256Z" })
  }
));
TapeLight.displayName = "TapeLight";
var Tape_default = TapeLight;
