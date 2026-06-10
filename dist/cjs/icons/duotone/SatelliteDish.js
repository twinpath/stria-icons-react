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
var SatelliteDish_exports = {};
__export(SatelliteDish_exports, {
  default: () => SatelliteDish_default
});
module.exports = __toCommonJS(SatelliteDish_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SatelliteDishDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.748 256.141C206.123 256.141 191.748 270.516 191.748 288.141C191.748 291.016 192.623 293.391 193.373 296.016L166 323.387L188.623 346.012L215.998 318.637C218.623 319.262 220.998 320.137 223.748 320.137C241.496 320.137 255.746 305.887 255.746 288.141C255.746 270.516 241.496 256.141 223.748 256.141ZM223.76 0C206.088 0 191.76 14.312 191.76 32S206.088 64 223.76 64C347.275 64 447.76 164.5 447.76 288C447.76 305.688 462.088 320 479.76 320S511.76 305.688 511.76 288C511.76 129.188 382.557 0 223.76 0ZM215.76 104C202.51 104 191.76 114.75 191.76 128S202.51 152 215.76 152C295.166 152 359.76 216.594 359.76 296C359.76 309.25 370.51 320 383.76 320S407.76 309.25 407.76 296C407.76 190.125 321.635 104 215.76 104Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M49.368 206.516C42.118 199.268 29.245 200.518 24.37 209.516C-17.378 287.389 -5.505 386.26 60.118 451.881C125.741 517.504 224.736 529.379 302.484 487.631C311.609 482.631 312.859 469.881 305.484 462.631L49.368 206.516Z" })
    ]
  }
));
SatelliteDishDuotone.displayName = "SatelliteDishDuotone";
var SatelliteDish_default = SatelliteDishDuotone;
