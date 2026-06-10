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
var PersonPraying_exports = {};
__export(PersonPraying_exports, {
  default: () => PersonPraying_default
});
module.exports = __toCommonJS(PersonPraying_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonPrayingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M380.15 165.594C374.369 158.875 364.277 158.141 357.59 163.844L272.996 236.359C269.496 239.344 265.09 240.656 260.434 240.047C255.809 239.422 251.871 236.938 249.277 233.078L222.277 192.563C207.873 170.969 184.029 159 157.873 160.641C131.967 162.266 109.561 177.094 97.967 200.297L58.156 279.922C40.438 315.359 50.969 357.781 83.186 380.797L222.059 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H271.996C278.965 512 285.121 507.5 287.246 500.891C289.34 494.266 286.965 487.016 281.309 482.984L101.811 354.766C82.467 340.953 76.154 315.5 86.779 294.234L126.592 214.609C133.029 201.719 145.467 193.484 159.873 192.578C173.717 191.625 187.623 198.297 195.654 210.312L222.652 250.828C230.277 262.266 242.465 269.891 256.059 271.75C269.871 273.797 283.465 269.562 293.809 260.656L378.4 188.156C385.119 182.391 385.9 172.297 380.15 165.594ZM255.996 128C291.342 128 319.996 99.346 319.996 64S291.342 0 255.996 0S191.998 28.654 191.998 64S220.65 128 255.996 128ZM255.996 32C273.641 32 287.996 46.355 287.996 64S273.641 96 255.996 96S223.996 81.645 223.996 64S238.352 32 255.996 32Z" })
  }
));
PersonPrayingLight.displayName = "PersonPrayingLight";
var PersonPraying_default = PersonPrayingLight;
