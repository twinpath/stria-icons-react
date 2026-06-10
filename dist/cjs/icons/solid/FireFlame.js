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
var FireFlame_exports = {};
__export(FireFlame_exports, {
  default: () => FireFlame_default
});
module.exports = __toCommonJS(FireFlame_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M203.119 4.364C196.94 -1.458 187.057 -1.453 180.879 4.37C74.519 104.622 0 220.178 0 298.042C0 423.989 79 512 192 512S384 423.989 384 298.042C384 219.945 309.035 104.166 203.119 4.364ZM192 448C121.375 448 64 395.125 64 330.125C64 286.001 89.875 258.625 98.375 250.375C101.5 247.25 106.5 247.25 109.625 250.375C111.125 251.875 112 253.875 112 256V296C112 327 137 352 168 352C198.875 352 224 327 224 296C224 224 111.375 231.25 184.5 131.625C187.5 127.75 192 127.5 195.125 128.5C196.75 129 200.5 130.75 200.5 135.25C200.5 168.875 225.625 190.25 252.125 212.875C285.5 241.5 320 271 320 330.125C320 395.125 262.625 448 192 448Z" })
  }
));
FireFlameSolid.displayName = "FireFlameSolid";
var FireFlame_default = FireFlameSolid;
