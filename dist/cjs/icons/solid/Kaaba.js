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
var Kaaba_exports = {};
__export(Kaaba_exports, {
  default: () => Kaaba_default
});
module.exports = __toCommonJS(Kaaba_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KaabaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.125 83.5L318.375 4.875C298.625 -1.625 277.375 -1.625 257.625 4.875L21.875 83.5C8.875 87.875 0 100.125 0 113.875V162.875L265 83.375C280 78.875 296 78.875 311 83.375L576 162.875V113.875C576 100.125 567.25 87.875 554.125 83.5ZM274.25 114L0 196.25V424.625C0 439.625 10.375 452.625 25 455.875L267.125 509.75C280.875 512.75 295.125 512.75 308.875 509.75L551 455.875C565.625 452.625 576 439.625 576 424.625V196.25L301.75 114C292.75 111.25 283.25 111.25 274.25 114ZM128 230.125C128 233.75 125.625 236.875 122.125 237.875L42.125 259.625C37 261 32 257.25 32 251.875V235.375C32 231.75 34.375 228.625 37.875 227.625L117.875 205.75C123 204.375 128 208.25 128 213.5V230.125ZM272 190.875C272 194.5 269.625 197.625 266.125 198.5L170.125 224.75C165 226.125 160 222.25 160 217V200.375C160 196.875 162.375 193.625 165.875 192.75L261.875 166.5C267 165.125 272 169 272 174.25V190.875ZM448 213.5C448 208.25 453 204.375 458.125 205.75L538.125 227.625C541.625 228.625 544 231.75 544 235.375V251.875C544 257.25 539 261 533.875 259.625L453.875 237.875C450.375 236.875 448 233.75 448 230.125V213.5ZM304 174.25C304 169 309 165.125 314.125 166.5L410.125 192.75C413.625 193.625 416 196.875 416 200.5V217C416 222.25 411 226.125 405.875 224.75L309.875 198.5C306.375 197.625 304 194.5 304 190.875V174.25Z" })
  }
));
KaabaSolid.displayName = "KaabaSolid";
var Kaaba_default = KaabaSolid;
