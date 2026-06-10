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
var ArrowsRepeat1_exports = {};
__export(ArrowsRepeat1_exports, {
  default: () => ArrowsRepeat1_default
});
module.exports = __toCommonJS(ArrowsRepeat1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeat1Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.001 287.99C512.001 270.303 497.609 256 479.988 256C466.582 256 454.098 264.469 449.629 277.875C434.865 322.219 393.537 352 346.805 352H96C78.328 352 64 366.312 64 384C64 392.188 67.125 400.375 73.375 406.625L169.371 502.625C175.621 508.875 183.809 512 191.996 512C209.049 512 223.996 498.269 223.996 480C223.996 471.812 220.871 463.625 214.621 457.375L173.246 416H346.805C477.759 416 512.001 296.807 512.001 287.99Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M263.99 192.001C261.444 192.001 258.884 192.404 256.407 193.219L232.407 201.219C222.349 204.592 215.997 213.941 215.997 223.991C215.997 237.331 226.819 248 240.001 248V296C240.001 309.25 250.751 320 264.001 320S288.001 309.25 288.001 296V216C288.001 202.687 277.195 192.001 263.99 192.001ZM438.626 105.375L342.63 9.375C336.38 3.125 328.192 0 320.005 0C302.951 0 288.005 13.731 288.005 32C288.005 40.188 291.13 48.375 297.38 54.625L338.755 96H165.196C34.242 96 0 215.193 0 224.01C0 241.697 14.392 256 32.012 256C45.419 256 57.903 247.531 62.372 234.125C77.135 189.781 118.464 160 165.196 160H416.001C433.673 160 448.001 145.688 448.001 128C448.001 119.812 444.876 111.625 438.626 105.375Z " })
    ]
  }
));
ArrowsRepeat1Duotone.displayName = "ArrowsRepeat1Duotone";
var ArrowsRepeat1_default = ArrowsRepeat1Duotone;
