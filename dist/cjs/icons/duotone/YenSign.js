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
var YenSign_exports = {};
__export(YenSign_exports, {
  default: () => YenSign_default
});
module.exports = __toCommonJS(YenSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const YenSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 352C16 369.672 30.328 384 48 384H120V320H48C30.328 320 16 334.328 16 352ZM304 256C304 238.328 289.672 224 272 224H229.734L200 270.189V288H272C289.672 288 304 273.672 304 256ZM48 224C30.328 224 16 238.328 16 256S30.328 288 48 288H120V265.648L92.484 224H48ZM272 320H200V384H272C289.672 384 304 369.672 304 352S289.672 320 272 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.644 93.656L200.003 270.189V440C200.003 462.094 182.097 480 160.003 480S120.003 462.094 120.003 440V265.648L6.628 94.047C-5.544 75.625 -0.481 50.797 17.956 38.625C36.331 26.453 61.191 31.516 73.378 49.953L161.128 182.781L246.363 50.344C258.331 31.766 283.097 26.406 301.659 38.359C320.222 50.328 325.597 75.078 313.644 93.656Z" })
    ]
  }
));
YenSignDuotone.displayName = "YenSignDuotone";
var YenSign_default = YenSignDuotone;
