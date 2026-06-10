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
var Duck_exports = {};
__export(Duck_exports, {
  default: () => Duck_default
});
module.exports = __toCommonJS(Duck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DuckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448.007 224C501.003 224 544 181 544 128H480.004C480.004 75 437.008 32 384.011 32S288.018 75 288.018 128C288.018 151.125 296.392 172.125 310.141 188.625C316.391 196.125 320.016 205.375 320.016 215.125C320.016 237.75 301.767 256 279.144 256H257.395C225.897 256 177.276 242.75 155.777 219.75C145.778 209 128.029 216.125 128.029 230.625C128.029 315.375 196.649 384 281.393 384H249.396C173.401 384 110.78 328.5 98.531 256H48.16C39.035 256 31.411 263.625 32.036 272.75C40.66 388.625 137.404 480 255.395 480H362.638C418.134 480 473.38 435.5 479.38 380.25C483.879 337.875 464.631 299.875 433.258 277.375C422.509 269.625 416.009 257.125 416.009 243.75C416.009 236.625 418.009 230 421.384 224H448.007ZM384.011 144C375.137 144 368.012 136.875 368.012 128S375.137 112 384.011 112C392.886 112 400.01 119.125 400.01 128S392.886 144 384.011 144Z" })
  }
));
DuckSolid.displayName = "DuckSolid";
var Duck_default = DuckSolid;
