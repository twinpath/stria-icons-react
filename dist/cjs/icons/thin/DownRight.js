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
var DownRight_exports = {};
__export(DownRight_exports, {
  default: () => DownRight_default
});
module.exports = __toCommonJS(DownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.372 173.729L146.137 309.494L78.255 377.376C69.107 386.524 66.367 400.291 71.316 412.245C72.958 416.207 75.337 419.713 78.252 422.628C84.14 428.516 92.222 432.001 100.882 432H327.157C335.996 432 343.995 428.42 349.784 422.631C355.574 416.841 359.154 408.842 359.154 400.003V173.729C359.154 165.07 355.669 156.987 349.782 151.099C346.866 148.184 343.362 145.807 339.399 144.163C327.444 139.214 313.678 141.954 304.529 151.102L236.647 218.984L100.882 83.22C88.385 70.722 68.125 70.722 55.627 83.22L10.372 128.474C-2.123 140.97 -2.125 161.232 10.372 173.729ZM66.941 94.533C73.179 88.295 83.33 88.295 89.569 94.533L236.647 241.612L315.843 162.416C320.434 157.825 327.278 156.463 333.27 158.944C335.228 159.756 336.978 160.923 338.468 162.413C341.49 165.435 343.153 169.453 343.153 173.729V400.003C343.153 404.279 341.49 408.298 338.471 411.317C335.45 414.338 331.431 416 327.156 416H100.881C96.605 416 92.588 414.336 89.566 411.314C88.076 409.824 86.907 408.076 86.099 406.124C83.616 400.125 84.977 393.282 89.569 388.69L168.765 309.494L21.686 162.416C15.448 156.177 15.448 146.026 21.686 139.788L66.941 94.533Z" })
  }
));
DownRightThin.displayName = "DownRightThin";
var DownRight_default = DownRightThin;
