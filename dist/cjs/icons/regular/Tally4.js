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
var Tally4_exports = {};
__export(Tally4_exports, {
  default: () => Tally4_default
});
module.exports = __toCommonJS(Tally4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Tally4Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 32C18.75 32 8 42.75 8 56V456C8 469.25 18.75 480 32 480S56 469.25 56 456V56C56 42.75 45.25 32 32 32ZM160 32C146.75 32 136 42.75 136 56V456C136 469.25 146.75 480 160 480S184 469.25 184 456V56C184 42.75 173.25 32 160 32ZM288 32C274.75 32 264 42.75 264 56V456C264 469.25 274.75 480 288 480S312 469.25 312 456V56C312 42.75 301.25 32 288 32ZM416 32C402.75 32 392 42.75 392 56V456C392 469.25 402.75 480 416 480S440 469.25 440 456V56C440 42.75 429.25 32 416 32Z" })
  }
));
Tally4Regular.displayName = "Tally4Regular";
var Tally4_default = Tally4Regular;
