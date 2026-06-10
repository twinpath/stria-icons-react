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
var ClockDesk_exports = {};
__export(ClockDesk_exports, {
  default: () => ClockDesk_default
});
module.exports = __toCommonJS(ClockDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockDeskThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 100.289 0 224V472C0 494.062 17.938 512 40 512H408C430.062 512 448 494.062 448 472V224C448 100.289 347.713 0 224 0ZM432 472C432 485.219 421.219 496 408 496H40C26.781 496 16 485.219 16 472V306.812C48.951 389.488 129.57 448 224 448S399.049 389.488 432 306.812V472ZM224 432C109.309 432 16 338.691 16 224S109.309 16 224 16S432 109.309 432 224S338.691 432 224 432ZM232 236.094V104C232 99.594 228.406 96 224 96S216 99.594 216 104V240C216 242.469 217.125 244.812 219.094 246.312L291.094 302.312C292.562 303.438 294.281 304 296 304C298.375 304 300.75 302.938 302.312 300.906C305.031 297.438 304.406 292.406 300.906 289.688L232 236.094Z" })
  }
));
ClockDeskThin.displayName = "ClockDeskThin";
var ClockDesk_default = ClockDeskThin;
