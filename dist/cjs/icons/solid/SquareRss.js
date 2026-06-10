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
var SquareRss_exports = {};
__export(SquareRss_exports, {
  default: () => SquareRss_default
});
module.exports = __toCommonJS(SquareRss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRssSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.348 480 448 451.344 448 416V96C448 60.656 419.348 32 384 32ZM150.627 374.629C144.379 380.879 136.189 384 128 384S111.621 380.879 105.373 374.629C92.877 362.129 92.877 341.871 105.373 329.371C111.621 323.121 119.811 320 128 320S144.379 323.121 150.627 329.371C163.125 341.871 163.125 362.129 150.627 374.629ZM249.562 383.938C249.031 383.969 248.5 384 247.969 384C235.437 384 224.875 374.25 224.047 361.562C220.5 306.875 173.125 259.5 118.438 255.938C105.219 255.094 95.188 243.656 96.047 230.438C96.906 217.188 108.453 207.625 121.563 208.062C199.422 213.125 266.891 280.562 271.953 358.438C272.812 371.656 262.781 383.094 249.562 383.938ZM345 383.969C344.656 384 344.328 384 343.984 384C331.188 384 320.562 373.906 320.016 361C315.562 254.625 225.391 164.438 119 159.969C105.75 159.438 95.469 148.25 96.016 135C96.578 121.75 107.875 111.219 121 112.031C251.719 117.5 362.516 228.281 367.984 359C368.531 372.25 358.25 383.438 345 383.969Z" })
  }
));
SquareRssSolid.displayName = "SquareRssSolid";
var SquareRss_default = SquareRssSolid;
