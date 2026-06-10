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
var TransgenderAlt_exports = {};
__export(TransgenderAlt_exports, {
  default: () => TransgenderAlt_default
});
module.exports = __toCommonJS(TransgenderAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderAltLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.77 9.891C509.148 5.973 506.027 2.852 502.109 1.23C500.154 0.422 498.082 0 496 0H384C375.156 0 368 7.156 368 16S375.156 32 384 32H457.375L375.355 114.02C344.881 83.191 302.664 64 256 64S167.119 83.191 136.645 114.02L118.625 96L131.312 83.312C137.562 77.062 137.562 66.937 131.312 60.688S114.937 54.438 108.688 60.688L96 73.375L54.625 32H128C136.844 32 144 24.844 144 16S136.844 0 128 0H16C13.918 0 11.846 0.422 9.891 1.23C5.973 2.852 2.852 5.973 1.23 9.891C0.422 11.846 0 13.918 0 16V128C0 136.844 7.156 144 16 144S32 136.844 32 128V54.625L73.375 96L60.688 108.688C54.438 114.938 54.438 125.063 60.688 131.312C63.812 134.438 67.906 136 72 136S80.188 134.438 83.312 131.312L96 118.625L116.305 138.93C98.477 165.6 88 197.586 88 232C88 319.146 154.963 390.182 240 398.381V432H192C183.156 432 176 439.156 176 448S183.156 464 192 464H240V496C240 504.844 247.156 512 256 512S272 504.844 272 496V464H320C328.844 464 336 456.844 336 448S328.844 432 320 432H272V398.381C357.037 390.182 424 319.146 424 232C424 197.586 413.523 165.6 395.695 138.93L480 54.625V128C480 136.844 487.156 144 496 144S512 136.844 512 128V16C512 13.918 511.578 11.846 510.77 9.891ZM256 368C181 368 120 307 120 232S181 96 256 96S392 157 392 232S331 368 256 368Z" })
  }
));
TransgenderAltLight.displayName = "TransgenderAltLight";
var TransgenderAlt_default = TransgenderAltLight;
