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
var Tally_exports = {};
__export(Tally_exports, {
  default: () => Tally_default
});
module.exports = __toCommonJS(Tally_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TallyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 448C96 465.672 110.326 480 128 480S160 465.672 160 448V339.812L96 360.689V448ZM224 448C224 465.672 238.326 480 256 480S288 465.672 288 448V298.057L224 318.934V448ZM256 32C238.326 32 224 46.326 224 64V251.59L288 230.711V64C288 46.326 273.674 32 256 32ZM128 32C110.326 32 96 46.326 96 64V293.346L160 272.467V64C160 46.326 145.674 32 128 32ZM384 32C366.326 32 352 46.326 352 64V209.834L416 188.955V64C416 46.326 401.674 32 384 32ZM352 448C352 465.672 366.326 480 384 480S416 465.672 416 448V256.301L352 277.178V448ZM512 32C494.326 32 480 46.326 480 64V168.078L544 147.199V64C544 46.326 529.674 32 512 32ZM480 448C480 465.674 494.326 480 512 480S544 465.674 544 448V214.545L480 235.424V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M617.871 190.448L41.86 378.353C25.131 383.78 7.012 374.53 1.596 357.798L1.562 357.695C-3.875 340.901 5.334 322.879 22.129 317.445L598.037 129.574C614.889 124.106 632.981 133.342 638.438 150.198V150.198C643.875 166.992 634.666 185.014 617.871 190.448Z" })
    ]
  }
));
TallyDuotone.displayName = "TallyDuotone";
var Tally_default = TallyDuotone;
