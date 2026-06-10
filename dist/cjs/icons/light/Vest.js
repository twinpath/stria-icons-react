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
var Vest_exports = {};
__export(Vest_exports, {
  default: () => Vest_default
});
module.exports = __toCommonJS(Vest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VestLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 255.625L400 187.656V48C400 21.531 378.469 0 352 0H313.156C306.531 0 300.625 4.062 298.219 10.219C297.053 13.232 298.955 11.182 285.844 20.344C248.281 46.594 199.719 46.594 162.156 20.344C149.053 11.187 150.947 13.232 149.781 10.219C147.375 4.062 141.469 0 134.844 0H96C69.531 0 48 21.531 48 48V187.656L8.656 254.594C3 262.719 0 272.219 0 282.094V464C0 490.469 21.531 512 48 512H400C426.469 512 448 490.469 448 464V282.094C448 272.219 445 262.719 440 255.625ZM224 72.094C242.668 72.094 261.242 67.941 278.844 60.334L224 210.195L169.156 60.332C186.758 67.939 205.332 72.094 224 72.094ZM193.062 290.219C192.375 292.062 192 294.031 192 296V480H48C41.139 480 35.385 475.596 33.117 469.508L131.312 371.312C137.562 365.062 137.562 354.937 131.312 348.688S114.937 342.438 108.688 348.688L32 425.375V282.094C32 278.812 33 275.625 35.562 271.875L77.781 200.125C79.25 197.656 80 194.844 80 192V48C80 39.188 87.188 32 96 32H122.969L124.211 32.867L206.828 254.609L193.062 290.219ZM416 425.375L339.312 348.688C333.062 342.438 322.937 342.438 316.688 348.688S310.438 365.063 316.688 371.312L414.883 469.508C412.617 475.594 406.859 480 400 480H224V299L323.789 32.869L325.031 32H352C360.812 32 368 39.188 368 48V192C368 194.844 368.75 197.656 370.219 200.125L413.094 272.906C415 275.625 416 278.812 416 282.094V425.375Z" })
  }
));
VestLight.displayName = "VestLight";
var Vest_default = VestLight;
