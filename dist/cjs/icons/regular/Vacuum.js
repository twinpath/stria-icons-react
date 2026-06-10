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
var Vacuum_exports = {};
__export(Vacuum_exports, {
  default: () => Vacuum_default
});
module.exports = __toCommonJS(Vacuum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VacuumRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 120C639.875 53.75 586.25 0.125 520 0H309.625C253.375 0 204 39.875 192.25 94.875L130.25 384H96C43 384 0 427 0 480V496C0 504.875 7.125 512 16 512H224C241.625 512 256 497.625 256 480V416C256 398.375 241.625 384 224 384H179.375L239.25 104.875C246.5 71.75 275.75 48.125 309.625 48H520C553.5 47.875 582.5 70.875 590.125 103.5C597.75 136 581.875 169.5 551.75 184.25C515.875 148.125 467 127.875 416 128H384C366.375 128 352 142.375 352 160V331.25C367 323.875 383.375 320.125 400 320V176H416C495.375 176 560 240.625 560 320V448C560 456.875 552.875 464 544 464H506.75C501.5 482.125 491.625 498.625 478.25 512H544C579.375 512 608 483.375 608 448V320C608 285.5 598.625 251.75 581 222.125C616.125 201.375 640 163.75 640 120ZM208 432V464H50.75C57.5 444.875 75.625 432 96 432H208ZM400 352C355.875 352 320 387.875 320 432S355.875 512 400 512S480 476.125 480 432S444.125 352 400 352ZM400 448C391.125 448 384 440.875 384 432S391.125 416 400 416S416 423.125 416 432S408.875 448 400 448Z" })
  }
));
VacuumRegular.displayName = "VacuumRegular";
var Vacuum_default = VacuumRegular;
