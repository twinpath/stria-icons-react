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
var ArrowsRepeat_exports = {};
__export(ArrowsRepeat_exports, {
  default: () => ArrowsRepeat_default
});
module.exports = __toCommonJS(ArrowsRepeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M165.196 160H338.755L297.38 201.375C284.88 213.875 284.88 234.125 297.38 246.625C309.872 259.117 330.122 259.133 342.628 246.625L438.626 150.625C451.126 138.125 451.126 117.875 438.626 105.375L342.628 9.375C330.13 -3.125 309.88 -3.125 297.38 9.375S284.88 42.125 297.38 54.625L338.755 96H165.196C90.87 96 25.153 143.375 1.653 213.875C-3.941 230.656 5.122 248.781 21.903 254.344C25.247 255.469 28.669 256 32.012 256C45.419 256 57.903 247.531 62.37 234.125C77.135 189.781 118.464 160 165.196 160ZM490.098 257.656C486.755 256.531 483.333 256 479.989 256C466.583 256 454.098 264.469 449.63 277.875C434.866 322.219 393.538 352 346.805 352H173.247L214.622 310.625C227.122 298.125 227.122 277.875 214.622 265.375C202.13 252.883 181.88 252.867 169.372 265.375L73.376 361.375C60.876 373.875 60.876 394.125 73.376 406.625L169.372 502.625C181.872 515.125 202.122 515.125 214.622 502.625S227.122 469.875 214.622 457.375L173.247 416H346.805C421.132 416 486.848 368.625 510.348 298.125C515.942 281.344 506.88 263.219 490.098 257.656Z" })
  }
));
ArrowsRepeatSolid.displayName = "ArrowsRepeatSolid";
var ArrowsRepeat_default = ArrowsRepeatSolid;
