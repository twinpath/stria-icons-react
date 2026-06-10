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
const SatelliteDishRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M201.484 344.453L248.969 296.969C258.344 287.594 258.344 272.406 248.969 263.031S224.406 253.656 215.031 263.031L167.547 310.516L72.062 215.031C67.109 210.062 60.328 207.719 53.266 208.062C46.297 208.594 39.891 212.156 35.75 217.781C12.359 249.656 0 287.438 0 327.094C0 429.062 82.953 512 184.906 512C224.562 512 262.359 499.625 294.203 476.25C299.844 472.094 303.406 465.719 303.937 458.719C304.469 451.75 301.922 444.875 296.969 439.937L201.484 344.453ZM184.906 464C109.422 464 48 402.594 48 327.094C48 307.438 52.109 288.375 60.016 270.875L241.141 452C223.625 459.906 204.578 464 184.906 464ZM216 0C202.75 0 192 10.75 192 24S202.75 48 216 48C352.75 48 464 159.25 464 296C464 309.25 474.75 320 488 320S512 309.25 512 296C512 132.781 379.219 0 216 0ZM216 104C202.75 104 192 114.75 192 128S202.75 152 216 152C295.406 152 360 216.594 360 296C360 309.25 370.75 320 384 320S408 309.25 408 296C408 190.125 321.875 104 216 104Z" })
  }
));
SatelliteDishRegular.displayName = "SatelliteDishRegular";
var SatelliteDish_default = SatelliteDishRegular;
