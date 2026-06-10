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
var HandPointRight_exports = {};
__export(HandPointRight_exports, {
  default: () => HandPointRight_default
});
module.exports = __toCommonJS(HandPointRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 408C320 401.572 319.154 395.338 317.566 389.402C338.205 376.729 352 353.945 352 328C352 321.572 351.154 315.338 349.566 309.402C370.205 296.729 384 273.945 384 248C384 245.295 383.852 242.627 383.559 240H440C479.701 240 512 207.701 512 168S479.701 96 440 96H243.689C227.533 76.514 203.232 64 176 64H126.125C94.021 64 64.471 81.102 49.002 108.633L17.648 164.463C6.104 185.084 0 208.373 0 231.812V339.688C0 417.055 64.598 480 144 480H248C287.701 480 320 447.701 320 408ZM280 304C293.234 304 304 314.781 304 328S293.234 352 280 352H232C218.766 352 208 341.219 208 328S218.766 304 232 304H280ZM312 224C325.234 224 336 234.781 336 248S325.234 272 312 272H264C260.971 272 258.125 271.299 255.455 270.27C260.736 259.926 264 248.391 264 236V224H312ZM440 144C453.234 144 464 154.781 464 168S453.234 192 440 192H264V152C264 149.314 263.443 146.783 263.207 144.16C263.486 144.15 263.719 144 264 144H440ZM48 339.688V231.812C48 216.562 51.984 201.406 59.516 187.937L90.859 132.156C97.844 119.719 111.359 112 126.125 112H176C198.062 112 216 129.938 216 152V236C216 251.438 203.438 264 188 264S160 251.438 160 236V184C160 170.75 149.25 160 136 160S112 170.75 112 184V236C112 269.234 133.578 297.246 163.355 307.545C161.273 314.041 160 320.861 160 328C160 333.041 161.166 337.836 162.178 342.658C137.365 354.035 120 378.965 120 408C120 415.684 121.557 422.941 123.836 429.869C80.564 420.926 48 383.934 48 339.688ZM192 432C178.766 432 168 421.219 168 408S178.766 384 192 384H248C261.234 384 272 394.781 272 408S261.234 432 248 432H192Z" })
  }
));
HandPointRightRegular.displayName = "HandPointRightRegular";
var HandPointRight_default = HandPointRightRegular;
