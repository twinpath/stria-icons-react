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
var LiraSign_exports = {};
__export(LiraSign_exports, {
  default: () => LiraSign_default
});
module.exports = __toCommonJS(LiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LiraSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 464C320 472.844 312.844 480 304 480H16C10.469 480 5.312 477.125 2.375 472.406C-0.531 467.688 -0.781 461.812 1.688 456.844C18.271 423.691 30.133 388.289 37.873 352H16C7.156 352 0 344.844 0 336S7.156 320 16 320H43.508C46.215 300.312 48 280.514 48 260.656V256H16C7.156 256 0 248.844 0 240S7.156 224 16 224H48V160.281C48 89.562 105.562 32 176.281 32C199.969 32 223.188 38.438 243.438 50.594L296.219 82.281C303.813 86.813 306.281 96.656 301.719 104.219C297.188 111.813 287.281 114.344 279.781 109.719L226.969 78.031C211.688 68.844 194.156 64 176.281 64C123.188 64 80 107.188 80 160.281V224H240C248.844 224 256 231.156 256 240S248.844 256 240 256H80V260.656C80 280.506 78.279 300.299 75.754 320H240C248.844 320 256 327.156 256 336S248.844 352 240 352H70.779C64.246 384.934 54.422 417.213 41.094 448H304C312.844 448 320 455.156 320 464Z" })
  }
));
LiraSignLight.displayName = "LiraSignLight";
var LiraSign_default = LiraSignLight;
