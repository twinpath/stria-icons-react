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
const SatelliteDishSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.999 104C202.749 104 191.999 114.75 191.999 128S202.749 152 215.999 152C295.406 152 359.999 216.594 359.999 296C359.999 309.25 370.749 320 383.999 320S407.999 309.25 407.999 296C407.999 190.125 321.874 104 215.999 104ZM223.999 0C206.327 0 191.999 14.312 191.999 32S206.327 64 223.999 64C347.515 64 447.999 164.5 447.999 288C447.999 305.688 462.327 320 479.999 320S511.999 305.688 511.999 288C511.999 129.188 382.796 0 223.999 0ZM188.865 346.008L216.238 318.637C218.863 319.262 221.238 320.137 223.988 320.137C241.736 320.137 255.986 305.887 255.986 288.141C255.986 270.516 241.736 256.141 223.988 256.141C206.363 256.141 191.988 270.516 191.988 288.141C191.988 291.016 192.863 293.391 193.613 296.016L166.24 323.387L49.368 206.516C42.118 199.266 29.245 200.516 24.37 209.516C-17.378 287.391 -5.505 386.258 60.118 451.883C125.741 517.504 224.736 529.379 302.484 487.633C311.609 482.633 312.859 469.883 305.484 462.633L188.865 346.008Z" })
  }
));
SatelliteDishSolid.displayName = "SatelliteDishSolid";
var SatelliteDish_default = SatelliteDishSolid;
