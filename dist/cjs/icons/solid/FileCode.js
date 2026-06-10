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
var FileCode_exports = {};
__export(FileCode_exports, {
  default: () => FileCode_default
});
module.exports = __toCommonJS(FileCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileCodeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM154.141 353.844C161.953 361.656 161.953 374.344 154.141 382.156C150.234 386.062 145.125 388 140 388S129.766 386.062 125.859 382.156L77.859 334.156C70.047 326.344 70.047 313.656 77.859 305.844L125.859 257.844C133.672 250.031 146.328 250.031 154.141 257.844S161.953 278.344 154.141 286.156L120.281 320L154.141 353.844ZM306.141 305.844C313.953 313.656 313.953 326.344 306.141 334.156L258.141 382.156C254.234 386.062 249.125 388 244 388S233.766 386.062 229.859 382.156C222.047 374.344 222.047 361.656 229.859 353.844L263.719 320L229.859 286.156C222.047 278.344 222.047 265.656 229.859 257.844S250.328 250.031 258.141 257.844L306.141 305.844ZM256 0V128H384L256 0Z" })
  }
));
FileCodeSolid.displayName = "FileCodeSolid";
var FileCode_default = FileCodeSolid;
