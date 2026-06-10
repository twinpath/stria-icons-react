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
var CassetteTape_exports = {};
__export(CassetteTape_exports, {
  default: () => CassetteTape_default
});
module.exports = __toCommonJS(CassetteTape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CassetteTapeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 384L448 480H128L160 384H416ZM576 96V432C576 458.51 554.51 480 528 480H481.73L446.357 373.88C442.002 360.814 429.773 352 416 352H159.998C146.225 352 133.998 360.813 129.643 373.879L94.27 480H48C21.49 480 0 458.51 0 432V96C0 60.654 28.654 32 64 32H512C547.346 32 576 60.654 576 96ZM176 224C176 206.375 161.625 192 144 192S112 206.375 112 224S126.375 256 144 256S176 241.625 176 224ZM336 224C336 212.719 338.305 202.055 341.879 192H234.121C237.695 202.055 240 212.719 240 224S237.695 245.945 234.121 256H341.879C338.305 245.945 336 235.281 336 224ZM464 224C464 206.375 449.625 192 432 192S400 206.375 400 224S414.375 256 432 256S464 241.625 464 224Z" })
  }
));
CassetteTapeSolid.displayName = "CassetteTapeSolid";
var CassetteTape_default = CassetteTapeSolid;
