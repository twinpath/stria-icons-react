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
var DiamondTurnRight_exports = {};
__export(DiamondTurnRight_exports, {
  default: () => DiamondTurnRight_default
});
module.exports = __toCommonJS(DiamondTurnRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiamondTurnRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.97 222.129L289.871 14.027C280.517 4.672 268.259 -0.004 256 -0.004C243.742 -0.004 231.482 4.672 222.128 14.027L14.029 222.129C4.676 231.482 0 243.741 0 256C0 268.259 4.676 280.518 14.029 289.871L222.128 497.969C231.482 507.32 243.742 512 256 512C268.259 512 280.517 507.32 289.871 497.969L497.97 289.871C507.323 280.518 511.999 268.259 511.999 256C511.999 243.741 507.323 231.482 497.97 222.129ZM256.07 464.027L47.97 256.07L255.968 48.008L464.029 255.93L256.07 464.027ZM302.062 216H200C186.75 216 176 226.75 176 240V312C176 325.25 186.75 336 200 336S224 325.25 224 312V264H302.062L279.031 287.031C269.656 296.406 269.656 311.594 279.031 320.969C283.718 325.656 289.843 328 296 328S308.281 325.656 312.968 320.969L376.968 256.969C386.343 247.594 386.343 232.406 376.968 223.031L312.968 159.031C303.593 149.656 288.406 149.656 279.031 159.031S269.656 183.594 279.031 192.969L302.062 216Z" })
  }
));
DiamondTurnRightRegular.displayName = "DiamondTurnRightRegular";
var DiamondTurnRight_default = DiamondTurnRightRegular;
