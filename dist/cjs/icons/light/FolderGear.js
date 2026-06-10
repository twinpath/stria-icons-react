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
var FolderGear_exports = {};
__export(FolderGear_exports, {
  default: () => FolderGear_default
});
module.exports = __toCommonJS(FolderGear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderGearLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L258.746 128H448C465.645 128 480 142.355 480 160V416ZM353 232C348.562 224.344 338.781 221.688 331.141 226.156L315.582 235.137C304.297 222.43 289.268 213.137 272 209.617V192C272 183.156 264.844 176 256 176S240 183.156 240 192V209.617C222.732 213.137 207.703 222.43 196.418 235.137L180.859 226.156C173.203 221.688 163.422 224.344 159 232S157.203 249.438 164.859 253.844L180.445 262.84C177.785 270.797 176 279.156 176 288S177.785 305.203 180.445 313.16L164.859 322.156C157.203 326.562 154.578 336.344 159 344C161.969 349.125 167.344 352 172.875 352C175.594 352 178.344 351.312 180.859 349.844L196.418 340.863C207.703 353.57 222.732 362.863 240 366.383V384C240 392.844 247.156 400 256 400S272 392.844 272 384V366.383C289.268 362.863 304.297 353.57 315.582 340.863L331.141 349.844C333.656 351.312 336.406 352 339.125 352C344.656 352 350.031 349.125 353 344C357.422 336.344 354.797 326.562 347.141 322.156L331.555 313.16C334.215 305.203 336 296.844 336 288S334.215 270.797 331.555 262.84L347.141 253.844C354.797 249.438 357.422 239.656 353 232ZM256 336C229.531 336 208 314.469 208 288S229.531 240 256 240S304 261.531 304 288S282.469 336 256 336Z" })
  }
));
FolderGearLight.displayName = "FolderGearLight";
var FolderGear_default = FolderGearLight;
