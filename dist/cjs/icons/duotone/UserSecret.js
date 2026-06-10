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
var UserSecret_exports = {};
__export(UserSecret_exports, {
  default: () => UserSecret_default
});
module.exports = __toCommonJS(UserSecret_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserSecretDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 320L208 376L176.012 479.953L184 512H264L271.988 479.953L240 376L272 320H176ZM350.777 163.867C341.227 165.975 331.094 167.92 320 169.527V186.043C320 207 302.791 224 281.584 224H269.25C252.791 224 238.961 213.605 233.615 199.008C232.105 194.887 228.389 192 224 192S215.895 194.887 214.385 199.008C209.039 213.605 195.209 224 178.75 224H166.416C145.209 224 128 207 128 186.043V169.527C116.906 167.92 106.773 165.975 97.223 163.867C96.836 167.922 96 171.844 96 176C96 246.691 153.307 304 224 304S352 246.691 352 176C352 171.844 351.164 167.922 350.777 163.867Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M105.492 224H48.016C36.697 224 28.957 235.43 33.16 245.941L70.309 338.812C27.867 370.359 0 420.371 0 477.332C0 496.477 15.523 512 34.664 512H184L117.906 247.623C112.939 240.279 108.867 232.322 105.492 224ZM377.691 338.812L414.84 245.941C419.043 235.43 411.303 224 399.984 224H342.508C339.133 232.322 335.061 240.279 330.094 247.623L264 512H413.336C432.477 512 448 496.477 448 477.332C448 420.367 420.133 370.355 377.691 338.812ZM281.584 224C302.791 224 320 207 320 186.043V169.527C377.332 161.225 416 145.756 416 128C416 111.918 384.25 97.719 335.686 89.008C323.805 45.148 304.945 0 277.438 0C267.062 0 257.813 4.5 250.062 10.5C234.812 22.375 213.312 22.375 198.062 10.5C190.312 4.5 181.062 0 170.688 0C143.178 0 124.432 45.156 112.496 88.977C63.826 97.68 32 111.898 32 128C32 145.756 70.668 161.225 128 169.527V186.043C128 207 145.209 224 166.416 224H178.75C195.209 224 209.039 213.605 214.385 199.008C215.895 194.887 219.611 192 224 192S232.105 194.887 233.615 199.008C238.961 213.605 252.791 224 269.25 224H281.584Z" })
    ]
  }
));
UserSecretDuotone.displayName = "UserSecretDuotone";
var UserSecret_default = UserSecretDuotone;
