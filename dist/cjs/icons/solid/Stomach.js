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
var Stomach_exports = {};
__export(Stomach_exports, {
  default: () => Stomach_default
});
module.exports = __toCommonJS(Stomach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StomachSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 95.998C329.75 95.998 293.125 128.623 274.875 159.997H256C220.625 159.997 192 131.373 192 95.998V16C192 7.125 184.875 0 176 0H144C135.125 0 128 7.125 128 16V95.998C128 166.747 185.25 223.996 256 223.996H256.5C256.375 225.871 256 227.621 256 229.496V287.995C256 323.369 227.375 351.994 192 351.994H128C57.25 351.994 0 409.243 0 479.992V495.991C0 504.866 7.125 511.991 16 511.991H48C56.875 511.991 64 504.866 64 495.991V479.992C64 442.367 98 428.743 117.875 428.743C135 428.743 147.5 435.492 159 446.992C226.25 514.241 297.625 511.991 308.375 511.991C420.875 511.991 512 420.868 512 308.37V223.996C512 153.247 454.75 95.998 384 95.998ZM448 308.37C448 317.62 447 326.494 445.25 335.244C423.75 341.369 400.25 336.244 384 319.994C366.625 302.62 341.125 297.87 318.375 306.12C319.25 300.12 320 294.12 320 287.995V229.496C320 193.372 346.375 159.997 384 159.997C419.25 159.997 448 188.747 448 223.996V308.37Z" })
  }
));
StomachSolid.displayName = "StomachSolid";
var Stomach_default = StomachSolid;
