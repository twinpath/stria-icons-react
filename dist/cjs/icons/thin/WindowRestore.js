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
var WindowRestore_exports = {};
__export(WindowRestore_exports, {
  default: () => WindowRestore_default
});
module.exports = __toCommonJS(WindowRestore_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindowRestoreThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V192C384 156.654 355.346 128 320 128ZM368 448C368 474.467 346.467 496 320 496H64C37.533 496 16 474.467 16 448V272H368V448ZM368 256H16V192C16 165.533 37.533 144 64 144H320C346.467 144 368 165.533 368 192V256ZM448 0H192C156.654 0 128 28.652 128 64V88C128 92.418 131.582 96 136 96S144 92.418 144 88V64C144 37.49 165.49 16 192 16H448C474.51 16 496 37.49 496 64V320C496 346.51 474.51 368 448 368H424C419.582 368 416 371.582 416 376S419.582 384 424 384H448C483.346 384 512 355.346 512 320V64C512 28.652 483.346 0 448 0Z" })
  }
));
WindowRestoreThin.displayName = "WindowRestoreThin";
var WindowRestore_default = WindowRestoreThin;
