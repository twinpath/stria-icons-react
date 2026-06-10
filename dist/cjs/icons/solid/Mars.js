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
var Mars_exports = {};
__export(Mars_exports, {
  default: () => Mars_default
});
module.exports = __toCommonJS(Mars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.971 32H319.399C297.979 32 287.25 57.852 302.397 72.971L332.008 102.527L275.357 159.076C245.332 138.418 210.322 128.076 175.328 128.076C127.338 128.074 79.367 147.518 44.26 186.465C-16.598 253.977 -14.394 361.467 49.008 426.604C83.656 462.199 129.584 480 175.51 480C220.633 480 265.756 462.816 300.184 428.451C361.289 367.457 368.039 272.896 320.693 204.33L377.346 147.783L406.955 177.34C411.854 182.229 417.875 184.416 423.783 184.416C436.145 184.416 448 174.836 448 160.369V48C448 39.162 440.824 32 431.971 32ZM243.514 371.881C224.766 390.594 200.133 399.953 175.51 399.953C150.879 399.953 126.256 390.598 107.504 371.881C70.006 334.451 70.006 273.549 107.504 236.117C126.254 217.402 150.881 208.045 175.51 208.043C200.137 208.043 224.764 217.4 243.514 236.117C281.012 273.547 281.012 334.451 243.514 371.881Z" })
  }
));
MarsSolid.displayName = "MarsSolid";
var Mars_default = MarsSolid;
