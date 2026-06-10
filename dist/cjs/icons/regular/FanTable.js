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
var FanTable_exports = {};
__export(FanTable_exports, {
  default: () => FanTable_default
});
module.exports = __toCommonJS(FanTable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FanTableRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354 266.25C359.125 267.125 364.25 265.75 368.25 262.375C372.125 259.125 374.375 254.25 374.375 249C374.5 214.875 354.625 183.875 323.625 169.5S256.125 160 230 182.125L195.625 90.25C193 83.375 182.625 74.375 170.5 81.25C150.375 92.875 135.625 112 129.625 134.5C120.75 167.625 132 220.5 185 239.375L122.375 315.5C113.625 326.125 120.625 338 127.125 341.75C169.125 366 222.75 351.625 246.875 309.625C257.25 291.625 260.75 270.5 256.875 250.125L354 266.25ZM224 240C215.125 240 208 232.875 208 224S215.125 208 224 208S240 215.125 240 224S232.875 240 224 240ZM360 464H248V446.625C360.375 434.75 448 339.625 448 224C448 100.25 347.75 0 224 0S0 100.25 0 224C0 339.625 87.625 434.75 200 446.625V464H88C74.746 464 64 474.744 64 488C64 501.254 74.746 512 88 512H360C373.254 512 384 501.254 384 488C384 474.744 373.254 464 360 464ZM48 224C48 127 127 48 224 48S400 127 400 224S321 400 224 400S48 321 48 224Z" })
  }
));
FanTableRegular.displayName = "FanTableRegular";
var FanTable_default = FanTableRegular;
