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
const DiamondTurnRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.97 222.129L289.871 14.029C280.517 4.676 268.259 0 256 0C243.742 0 231.482 4.676 222.128 14.029L14.029 222.129C4.676 231.482 0 243.741 0 256C0 268.259 4.676 280.518 14.029 289.871L222.128 497.969C231.482 507.322 243.742 512 256 512C268.259 512 280.517 507.322 289.871 497.969L497.97 289.871C507.323 280.518 511.999 268.259 511.999 256C511.999 243.741 507.323 231.482 497.97 222.129ZM486.658 278.557L278.556 486.654C272.533 492.68 264.521 496 256 496C247.48 496 239.468 492.68 233.443 486.654L25.343 278.559C12.906 266.119 12.906 245.881 25.343 233.443L233.443 25.344C239.468 19.318 247.48 16 256 16C264.521 16 272.533 19.318 278.558 25.344L486.658 233.443C499.095 245.881 499.095 266.119 486.658 278.557ZM397.375 234.094L309.375 154.094C306.14 151.094 301.062 151.375 298.078 154.625C295.109 157.875 295.343 162.938 298.625 165.906L371.31 232H224C201.937 232 184 249.938 184 272V344C184 348.406 187.578 352 192 352S200 348.406 200 344V272C200 258.781 210.765 248 224 248H371.31L298.625 314.094C295.343 317.062 295.109 322.125 298.078 325.375C299.656 327.125 301.828 328 304 328C305.921 328 307.843 327.312 309.375 325.906L397.375 245.906C397.421 245.863 397.402 245.781 397.449 245.738C398.992 244.279 400 242.285 400 240S398.992 235.721 397.449 234.262C397.402 234.219 397.421 234.137 397.375 234.094Z" })
  }
));
DiamondTurnRightThin.displayName = "DiamondTurnRightThin";
var DiamondTurnRight_default = DiamondTurnRightThin;
