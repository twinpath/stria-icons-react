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
var CloudMoon_exports = {};
__export(CloudMoon_exports, {
  default: () => CloudMoon_default
});
module.exports = __toCommonJS(CloudMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudMoonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M566.512 261.084C484.002 276.609 408.221 214.121 408.221 131.844C408.221 84.451 433.904 40.871 475.656 17.391C482.092 13.781 480.473 4.143 473.164 2.809C464.652 1.25 450.721 0 442.084 0C348.197 0 272 75.141 272 168C272 168.57 272.164 169.094 272.17 169.662C275.648 171.826 279.305 173.67 282.625 176.094C284.406 176.031 286.219 176 288 176C349.688 176 403.719 218.469 419.344 276.969C439.684 291.887 455.521 311.748 465.98 334.156C508.91 328.166 547.354 306.447 574.193 273.799C578.885 268.078 573.777 259.73 566.512 261.084ZM390.75 296.375C383.25 246.375 340 208 288 208C282.875 208 277.75 208.375 272.75 209.125C248.5 188 217.25 176 184 176C120 176 65.75 221.25 51.625 281.25C19.625 305.125 0 343 0 384C0 454.625 57.375 512 128 512H332C396 512 448 460 448 396C448 354.25 425.25 316.75 390.75 296.375ZM332 464H128C83.75 464 48 428.25 48 384C48 351.25 67.75 323 96.125 310.75C96.75 262.75 135.75 224 184 224C215.25 224 242.375 240.25 258.125 264.75C266.75 259.25 277 256 288 256C318.875 256 344 281.125 344 312C344 317.875 342.75 323.5 341.125 328.875C374.25 333.375 400 361.5 400 396C400 433.625 369.5 464 332 464Z" })
  }
));
CloudMoonRegular.displayName = "CloudMoonRegular";
var CloudMoon_default = CloudMoonRegular;
