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
var WaveformLines_exports = {};
__export(WaveformLines_exports, {
  default: () => WaveformLines_default
});
module.exports = __toCommonJS(WaveformLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveformLinesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H320C306.745 0 296 10.745 296 24V488C296 501.255 306.745 512 320 512H320C333.255 512 344 501.255 344 488V24C344 10.745 333.255 0 320 0ZM224 96H224C210.745 96 200 106.745 200 120V392C200 405.255 210.745 416 224 416H224C237.255 416 248 405.255 248 392V120C248 106.745 237.255 96 224 96ZM416 128H416C402.745 128 392 138.745 392 152V360C392 373.255 402.745 384 416 384H416C429.255 384 440 373.255 440 360V152C440 138.745 429.255 128 416 128ZM512 64H512C498.745 64 488 74.745 488 88V424C488 437.255 498.745 448 512 448H512C525.255 448 536 437.255 536 424V88C536 74.745 525.255 64 512 64ZM128 192H128C114.745 192 104 202.745 104 216V296C104 309.255 114.745 320 128 320H128C141.255 320 152 309.255 152 296V216C152 202.745 141.255 192 128 192ZM32 224H32C18.745 224 8 234.745 8 248V264C8 277.255 18.745 288 32 288H32C45.255 288 56 277.255 56 264V248C56 234.745 45.255 224 32 224ZM608 224L608 224C594.745 224 584 234.745 584 248V264C584 277.255 594.745 288 608 288L608 288C621.255 288 632 277.255 632 264V248C632 234.745 621.255 224 608 224Z" })
  }
));
WaveformLinesRegular.displayName = "WaveformLinesRegular";
var WaveformLines_default = WaveformLinesRegular;
