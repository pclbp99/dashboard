import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    OverviewView: {
        paddingVertical: 20,
        paddingRight:20,
        borderRadius:20,
        backgroundColor:'#fff',
        marginBottom: 20,
    },

    OverviewTitle:{
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },

    OverviewTitleMain:{
        fontSize: 20,
        marginBottom:5,
        color:'#333',
    },

    OverviewCost: {
        fontSize: 24,
        fontWeight: '700',
        marginRight: 10,
    },

    OverviewTotalTxt: {
        color:'#999',
    },

    SubContainer:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },

    SubBox: {
        width:'47%',
        height: 120,
        backgroundColor:'#fff',
        borderRadius:20,
        padding:20,
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:20,
    },

    subTitle:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

    subTitleTxt: {
        fontFamily:'Montserrat-Medium',
    },

    subNumber: {
        fontFamily:'Montserrat-Bold',
        marginBottom:2,
    },

    ProfilesList: {
        width:'100%',
        flexDirection: 'row',
    },

    ProfileImageBox: {
        width: '30%',
        marginLeft:'-5%',
    },

    ProfileImage: {
        width:'100%',
        height:40,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#fff',
    },

    CategoryBar:{
        width:110,
        height:110,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: [
            { translateX: -55 },
            { translateY: -55 },
        ],
    },

    WebViewArea: {
        width:'100%',
        height:100,
        borderRadius:20,
    },
    
});

export default styles;
